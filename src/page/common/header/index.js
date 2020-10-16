'use strict'

require('./index.css')

var _mm =require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
        this.bindEvent();
    },
    onload : function(){
        var keyword = _mm.getUrlParam('keyword');
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent :function(){
        var _this = this;
        // 点击搜索按钮 搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //输入回车做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车的的keycode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        })
    },
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 有keyword跳转 没有转到list
        if(keyword){
            window.location.href='./list.html?keyword=' + keyword;
        }else{
            _mm.goHome();
        }
    }
}



header.init();