/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    var someVar = "334";
    // add new trigger
    $('#add-trigger').on('click', function(e) {
        $('<div class="context-menu-one clear btn btn-neutral menu-injected">'
            + 'right click me <em>(injected)'
            + '<br>').insertBefore(this);
        // not need for re-initializing $.contextMenu here :)
    });

    $.contextMenu({
        selector: '.context-menu1', 
        trigger: 'dblclick',
        callback: function(key, options) {
            if(key.indexOf("remove") != -1){
                $(this).removeClass(key.replace('remove:',''));
            } else {
                $(this).addClass(key);
            }
        },
        items: {
            "size-small": {name: "Size: small"},
            "remove:size-small": {name: "Remove Effect"}
        }
    });
    
    $.contextMenu({
        selector: '.context-menu2', 
        trigger: 'dblclick',
        callback: function(key, options) {
            if(key.indexOf("remove") != -1){
                $(this).removeClass(key.replace('remove:',''));
            } else {
                $(this).addClass(key);
            }
        },
        items: {
            "opacity": {name: "Opacity"},
            "remove:opacity": {name: "Remove Opacity"}
        }
    });
    
    $.contextMenu({
        selector: '.context-menu3', 
        trigger: 'dblclick',
        callback: function(key, options) {
            if(key.indexOf("remove") != -1){
                $(this).removeClass(key.replace('remove:',''));
            } else {
                $(this).addClass(key);
            }
        },
         items: {
            "add-shadow": {name: "Add Shadow"},
            "remove:add-shadow": {name: "Remove Effect"}
        }
    });
    
    $.contextMenu({
        selector: '.context-menu4', 
        trigger: 'dblclick',
        callback: function(key, options) {
            if(key.indexOf("remove") != -1){
                $(this).removeClass(key.replace('remove:',''));
            } else {
                $(this).addClass(key);
            }
        },
        items: {
            "tint": {name: "Tint: red"},
            "remove:tint": {name: "Remove Effect"}
        }
    });
    
});

