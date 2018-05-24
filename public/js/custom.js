$('.action-contact').bind('click',(evt)=>{
	var ele = $(evt.target).parents('button');
	var title = ele.attr('title'), text=ele.data('text');
	swal({title: title, text: text, content: 'link'});
});