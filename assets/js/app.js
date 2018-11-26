/* 
    Aplikasi Simple Invoice
    Menggunakan HTML5 dan Javascript
    Author  : Lufti Nurfahmi
    URL     : www.kodingspace.com
    Version : 1.0
*/

/* Button Klik Toggle Editable 
*  untuk mengaktifkan atribut contenteditable
*  https://www.w3schools.com/tags/att_global_contenteditable.asp
*/

var $btnEdit = $("#btnEdit"), 
    $addItem = $("#addItem");
    $addItem.attr("disabled", "disabled");
$btnEdit.on("click", function(){
    
    $(this).toggleClass("active");

    if($(this).hasClass("active")){
        $(this).html('<i class="fa fa-floppy-o"></i> Save');
        $addItem.removeAttr("disabled");
    }else{
        $addItem.attr("disabled", "disabled");
        $(this).html('<i class="fa fa-pencil"></i> Edit');
    }

    /* Tag yang terdapat class .editable ditambahkan atribut contenteditable */
    
    var $editable = $('.editable'), 
        isEditable = $editable.is('.active');

        $editable.prop('contenteditable',!isEditable).toggleClass('active');

});

/* #addItem
*  Menambah Row Item Invoice
*/
var $tableInvoice = $("#tableInvoice tbody"),
    tableRow = '<tr class="invoice-item">\
                    <th scope="row"><span class="editable active"  contenteditable="true">1</span></th>\
                    <td width="60%"><span class="editable active"  contenteditable="true">Item Description</span></td>\
                    <td class="qty"><span class="editable active"  contenteditable="true">1</span></td>\
                    <td class="unitPrice"><span class="editable active" contenteditable="true">100,000</span></td>\
                    <td class="totalPrice"><span class="editable active" contenteditable="true">100,000</span>\
                        <button class="btn deleteItem btn-default text-danger"><i class="fa fa-minus"></i></button>\
                    </td>\
                </tr>';

$addItem.on("click", function(){
    $tableInvoice.append(tableRow);
});

$(document).on("click", ".deleteItem", function(){
    $(this).parent().parent().remove();
});

// Upload Logo menjadi base64
var $invoiceLogo = $("#invLogo");
$('#uploadLogo').on("change",function() {
    
    var logo = document.getElementById('uploadLogo').files[0];     

    if (logo) {
        
        // FileReader API
        var reader = new FileReader();
        reader.readAsDataURL(logo);
        reader.onload = function(e) {            
           
            $invoiceLogo.attr("src",e.target.result);
        };
        
    }
});

