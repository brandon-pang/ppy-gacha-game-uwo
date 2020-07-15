var unid = "3675752";
var userid = "Webbug";
var email = "webbug@me.com";
var isLogin = "1";
var hasProfilePhoto = "N";
var bsRootPath = "https://blackshot.papayaplay.com";
//var ioRootPath = "https://io.papayaplay.com";
var ioRootPath = "http://test.papayaplay.com:8080/io";
var s3RootPath = "https://cdn.papayaplay.com";

//var staticRootPath = "https://static.papayaplay.com/static/assets";
var staticRootPath = "http://test.papayaplay.com:8080/papaya/";
var lang = "en";
var sid=5;
var PT_LOC_COMMON_PATH='https://static.papayaplay.com/static/assets/locale/common/common_'+ lang +'.json';	
var BSGLB_LOC_COMMON_PATH='https://static.papayaplay.com/static/assets/locale/common/common_'+ lang +'.json';
var BSGLB_LOC_LOCAL_PATH='https://static.papayaplay.com/static/assets/locale/bs-glb/bs_glb_'+ lang +'.json';

var scrollIconTopMargin = 486;
var itemTableTopMargin = 210;
var itemTableLeftMargin = 24;
var inventoryTopMargin = 220;
var inventoryLeftMargin = 0;

var aniLeft = $("#animation_container").position();
$("#confirm--select").css({ top: aniLeft.top + inventoryTopMargin, left: aniLeft.left + (inventoryLeftMargin+22) });
$("#iconDetail").hide();
$(window).resize(function () {
    aniLeft = $("#animation_container").position();
    if ($("#normalItemTable").css("display") !== "none") {
        $("#normalItemTable").css({ top: aniLeft.top + itemTableTopMargin, left: aniLeft.left + itemTableLeftMargin });
    }
    if ($("#inventory").css("display") !== "none") {
        $("#inventory").css({ top: aniLeft.top + inventoryTopMargin, left: aniLeft.left + inventoryLeftMargin });
    }
    if ($("#scrollIcons").css("top") !== "-400px") {
        $("#scrollIcons").css({ top: aniLeft.top + scrollIconTopMargin, left: aniLeft.left });
    }
})

function setVisibleOuterContainer(p) {
    if (p == 0) {
        $("#scrollIcons").css({ top:-400, left: aniLeft.left });
        $("#normalItemTable").css({ display: 'none', left: 0 });
        $("#inventory").css({ display: 'none', left: 0 });
    }
    if (p == 1) {
        $("#normalItemTable").css({ display: 'none', left: 0 });
        $("#inventory").css({ display: 'none', left: 0 });
    }
    if (p == 2) {
        $("#scrollIcons").css({ top:-400, left: aniLeft.left });
        $("#inventory").css({ display: 'none', left: 0 });
    }
    if (p == 3) {
        $("#scrollIcons").css({ top:-400, left: aniLeft.left });
        $("#normalItemTable").css({ display: 'none', left: -2000 });
    }
}

setVisibleOuterContainer(0)


var vueContainer = new Vue({
    el: '#gacha_container',
    data: {
        inventoryDatas: [],
        items: [],
        seasonInfo:[],
        itemShowDetail:[],
        invenSelectItem:[],
        inventorySelectCount:0,
        realCount:0,
        invenSendBankEnable:false,
        invenRecycleEnable:false,
        invenSendBankItemList:[],
        invenRecyclingItemList:[],
        isConfirmCheck:false,
    },
    methods: {
        fetchJson: function (lang) {
            var localeCommonUrl = LT_LOC_COMMON_PATH;
            var localeLocalUrl = LT_LOC_LOCAL_PATH;

            this.$http.get(localeCommonUrl)
                .then(function (res) {
                    //console.log(res.body)
                    this.locale_com = res.body;
                });

            this.$http.get(localeLocalUrl)
                .then(function (res) {
                    //console.log(res.body)
                    this.locale_loc = res.body;
                });
        },
        showIconDetail:function(id, arr){
            var vm = this;
            vm.itemShowDetail=[];
            vm.itemShowDetail[0]=arr[id];
           
            //$("#normalItemTable").css({ top: aniLeft.top + itemTableTopMargin, left: aniLeft.left + itemTableLeftMargin });
        },
        getInvenItems: function (category) {
            var vm = this;
            var category=category || -1;
            $.ajax({
                url: ioRootPath+"/secured/json.do?callback=?",
                type: 'GET',
				data: { cm: "Service.Gacha.GetGachaMyInventory", serviceid: sid, categoryid: category},
				crossDomain: true,
				dataType: 'json'
            })
            
            .success(function (res) {
                var code = res.ResultCode[0].Code;
                //console.log(res);
                if (code === "10000") {
                    //console.log(res.MyInventoryItemList);
                    vm.inventoryDatas = res.MyInventoryItemList;
                    for(let i=0; i<vm.inventoryDatas.length;i++){
                        vm.invenSelectItem.push(false);
                    }
                } else {

                }
            })
        },
        setSelectInvenItem:function(id){
            var vm=this;
           
            for(let i=0; i<vm.invenSelectItem.length;i++){
                if(id == i){
                    var count=vm.getCheckSelectCount();
                    if(count<5){
                        vm.invenSelectItem[i]=!vm.invenSelectItem[i];
                        Vue.set(vm.invenSelectItem, i, vm.invenSelectItem[i]);
                    }else{
                        vm.invenSelectItem[i]=false;
                        Vue.set(vm.invenSelectItem, i, vm.invenSelectItem[i]);
                    }
                    vm.realCount=0;
                    vm.invenSendBankItemList=[];
                    vm.invenRecyclingItemList=[];
                    for(let i=0; i<vm.invenSelectItem.length;i++){
                        if(vm.invenSelectItem[i]){
                           vm.realCount++
                           //버튼활성화
                           //5개 이상이면 리사이클링 버튼 활성화
                           if(vm.realCount<6){
                             vm.invenSendBankItemList.push(vm.inventoryDatas[i]);
                             vm.invenRecyclingItemList.push(vm.inventoryDatas[i]);
                           }
                        }
                    }
                    if(vm.realCount<1){
                        vm.invenSendBankEnable=false;
                        vm.invenRecycleEnable=false;
                    } 
                    if( vm.realCount>=1){
                        vm.invenSendBankEnable=true;
                        vm.invenRecycleEnable=false;
                    }
                    if( vm.realCount>=5){
                        vm.invenSendBankEnable=true;
                        vm.invenRecycleEnable=true;
                        console.log(vm.invenRecyclingItemList);
                    }
                }else{
                    vm.invenSelectItem[i].isSelect=false;
                }
            }
        },

        getCheckSelectCount:function(){
            var vm=this;
            vm.inventorySelectCount=0;
            for(let i=0; i<vm.invenSelectItem.length;i++){
                if(vm.invenSelectItem[i]){
                    vm.inventorySelectCount++
                }
            }
            return vm.inventorySelectCount;
        },
        goSendBank:function(){
            var vm=this;
            vm.isConfirmCheck=true;
            //show bank item
            console.log(vm.invenSendBankItemList);
        },
        setSendBankItem:function(){
            var vm = this;
            var category=category || -1;
            $.ajax({
                url: ioRootPath+"/secured/json.do?callback=?",
                type: 'GET',
                data: { cm: "Service.Gacha.SendGachaItemInGame", 
                serviceid: sid, 
                selectitem1: category,
                selectitem2: category,
                selectitem3: category,
                selectitem4: category,
                selectitem5: category},
				crossDomain: true,
				dataType: 'json'
            })
            
            .success(function (res) {
                var code = res.ResultCode[0].Code;
                //console.log(res);
                if (code === "10000") {
                    //console.log(res.MyInventoryItemList);
                    vm.inventoryDatas = res.MyInventoryItemList;
                    for(let i=0; i<vm.inventoryDatas.length;i++){
                        vm.invenSelectItem.push(false);
                    }
                } else {

                }
            })
        },
        goRecycling:function(){

        },

        getGachaUserInfo: function () {
            var vm = this;
            $.ajax({
                url: ioRootPath+"/secured/json.do?callback=?",
                type: 'GET',
				data: { cm: "Service.Gacha.GetGachaUserInfo", serviceid: sid, language: lang},
				crossDomain: true,
				dataType: 'json'
            })
            .success(function (res) {
                var code = res.ResultCode[0].Code;
                console.log(res);
                if (code === "10000") {
                    vm.items = res.GachaSeasonItemList;

                    for(let i=0; i<vm.items.length;i++){
                        if(vm.items[i].Tier == 5){
                            vm.items[i].Tier=staticRootPath+"/assets/images/uwo/gacha/icons-bg/icon_back_4.png";
                        }
                        //g
                        if(vm.items[i].Tier == 4){
                            vm.items[i].Tier=staticRootPath+"/assets/images/uwo/gacha/icons-bg/icon_back_3.png";
                        }
                        //s
                        if(vm.items[i].Tier == 3){
                            vm.items[i].Tier=staticRootPath+"/assets/images/uwo/gacha/icons-bg/icon_back_2.png";
                        }
                        //b
                        if(vm.items[i].Tier == 2){
                            vm.items[i].Tier=staticRootPath+"/assets/images/uwo/gacha/icons-bg/icon_back_1.png";
                        }
                        //n
                        if(vm.items[i].Tier == 1){
                            vm.items[i].Tier=staticRootPath+"/assets/images/uwo/gacha/icons-bg/icon_back_0.png";
                        }
                        //
                        if(vm.items[i].BackgroundURL == ""){
                            console.log(vm.items[i].Category);
                            vm.items[i].BackgroundURL=staticRootPath+"/assets/images/uwo/gacha/category-bg/ship-item"+vm.items[i].Category+".png";
                        }
                    }

                    if(vm.items.length !== 0){
                        setTimeout(function() {
                            //

                            $("#scrollIcons").css({display:"block",top:-400,left:aniLeft.left});
                            //vm.getInvenItems();
                            //
                            vm.seasonInfo = res.GachaSeasonInfo;
                        
                            $('#iconSl').slick({
                                slidesToShow: 6,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplaySpeed: 1000,
                                touchMove:false,
                                //centerMode: true,
                                prevArrow: '<div class="sl-prev-arrow">' +
                                    '<div class="arrow_circle_back"><svg width="14px" height="21px" viewBox="0 0 14 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                                    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
                                    '<g id="leftArrow" transform="translate(-610.000000, -381.000000)" fill="#ffffff">' +
                                    '<g id="message-bar" transform="translate(580.000000, 354.000000)">' +
                                    '<g id="chevron" transform="translate(30.000000, 27.000000)">' +
                                    '<polygon id="Path" transform="translate(7.000000, 10.500000) rotate(90.000000) translate(-7.000000, -10.500000) " points="-0.182535718 4.01011988 6.99100809 11.2761949 14.1725447 4 17 6.86190254 6.99100809 17 -3 6.88011832"></polygon>' +
                                    '</g>' +
                                    '</g>' +
                                    '</g>' +
                                    '</g>' +
                                    '</svg></div></div>',
                                nextArrow: '<div class="sl-next-arrow"><div class="arrow_circle_back">' +
                                    '<svg width="14px" height="21px" viewBox="0 0 14 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                                    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
                                    '<g id="rightArrow" transform="translate(-1310.000000, -594.000000)" fill="#ffffff">' +
                                    '<g id="Group-5" transform="translate(585.000000, 461.000000)">' +
                                    '<polygon id="Path" transform="translate(732.000000, 143.500000) scale(-1, 1) rotate(90.000000) translate(-732.000000, -143.500000) " points="724.817464 137.01012 731.991008 144.276195 739.172545 137 742 139.861903 731.991008 150 722 139.880118"></polygon>' +
                                    '</g>' +
                                    '</g>' +
                                    '</g>' +
                                    '</svg></div></div>',
                            });
                            $('#iconSl').on('mouseenter', '.cont--icons', function (e) {
                                var $currTarget = $(e.currentTarget);
                                var oripos=$('#animation_container').offset().left; 
                                var realWidth=oripos+760;  
                                

                                    var realIndex=$currTarget[0].children[0].alt.substring(9);
                                    if(realIndex !=="" || realIndex !==undefined ){
                                        var boxTop=$currTarget.offset().top-360;
                                        var boxLeft=$currTarget.offset().left+60;
                                        var boxWidth=boxLeft+350
                                        if(boxWidth>realWidth){
                                            boxLeft=$currTarget.offset().left-326;                                           
                                        };
                                        if(boxLeft<oripos){
                                            boxLeft=oripos;                                           
                                        };
                                        $("#iconDetail").css({ top:boxTop, left: boxLeft });
                                        vm.showIconDetail(realIndex, vm.items);
                                        if( !$("#iconDetail").is(':animated') ) {
                                            $("#iconDetail").fadeIn(300, function(){});
                                        }
                                    }
                            });
                            
                            $('.cont--icons').mouseleave(function(){
                                if( !$("#iconDetail").is(':animated') ) {
                                    $("#iconDetail").fadeOut();
                                }
                            }) 
                            $('body').mouseover(function(){
                                if( !$("#iconDetail").is(':animated') ) {
                                    $("#iconDetail").fadeOut();
                                }
                            }) 
                          }, 1000);
                    }
                } else if(code === "10002") {
                    console.log("시즌을 하나만 설정");
                }else{
                    console.log(code);
                }
            })
        },
    },
    filters: {
        capitalize:function(value){
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        truncate:function(value, length){
            //console.log(value);
            return value.slice(0, length) + (length < value.length ? '...' : '');
        }
    },
    created: function () {
       this.getGachaUserInfo();
    }
});