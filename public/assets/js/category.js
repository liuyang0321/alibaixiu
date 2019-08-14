$('#addCategory').on('submit',function(){
    var forData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/categories',
        data:forData,
        success:function(){
            location.reload()
        }
    })
    return false
})
$.ajax({
    type:'get',
    url:'/categories',
    success:function(response){
        var html = template('categoryListTpl',{data:response})
        $('#categoryBox').html(html)
    }
})

$('#categoryBox').on('click', '.edit', function () {

	var id = $(this).attr('data-id');

	$.ajax({
		type: 'get',
		url: '/categories/' + id,
		success: function (response) {
			console.log(response)
			var html = template('modifyCategoryTpl', response);
			$('#formBox').html(html);
		}
	})
});

$('#formBox').on('submit','#modifyCategory',function(){
    var formData = $(this).serialize()
    var fid = $(this).attr('data-id')
    $.ajax({
        type:'put',
        url:'/categories/'+id,
        data:formData,
        success:function(){
            location.reload()
        }
    })
    return false
})

$('#categoryBox').on('click','.delete',function(){
    if(confirm('您真要删除吗')){
        var id = $(this).attr('data-id')
        $.ajax({
            type:'delete',
            url:'/categories/'+id,
            success:function(){
                location.reload()
            }
        })
    }
})