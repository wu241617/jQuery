	$(function(){
				var n = 0;
				// 添加弹出框
				$('section:nth-child(1)>button').click(function(){
					 $('div').eq(0).css('display','block')
				})
				// 添加功能模块
				// 添加确定
				$('#addBtn').click(function(){
					var data = $('div').eq(0).find('input')
					var newArr = []
					data.each(function(){
						newArr.push($(this).val())
					})
					 var tr = $('<tr></tr>')
					 for(var i=0; i<newArr.length; i++){
						 var td = $('<td></td>')
						 td.html(newArr[i])
						 tr.append(td)
					 }
					 var tdLast = $('<td></td>')
					 var editBtn = $('<button>编辑</button>')
					 editBtn.click(function(){
						 $('div').eq(1).css('display','block')
						  n = $('table tr').length
						 edit(n)
					 })
					 var delBtn = $('<button>删除</button>')
					 delBtn.click(function(){
						 $('div').eq(2).css('display','block')
					 })
					 tdLast.append(editBtn)
					 tdLast.append(delBtn)
					 tr.append(tdLast)
					 $('table').append(tr)
					 $('div').eq(0).css('display','none')
					 data.each(function(){
						 $(this).val('')
					 })
				})
				// 添加取消
				$('#addExit').click(function(){
					var data = $('div').eq(0).find('input')
					data.each(function(){
						$(this).val('')
					})
					$('div').eq(0).css('display','none')
				})
				// 编辑功能模块 (查询数据)
				function edit(n){
					var arr = $('table tr').eq(n-1).find('td')
					var editArr = []
					arr.each(function(){
						editArr.push($(this).text())
					})
					editArr.pop()
					$('div').eq(1).find('input').each(function(index){
						$(this).val(editArr[index])
					})
				}
				// 编辑数据更新
				function update(n){
					var updataArr = $('div').eq(1).find('input')
					var updataArr1 = $('table tr').eq(n-1).find('td')
					updataArr.each(function(index){
						updataArr1.eq(index).text($(this).val())
					})
				}
				// 显示编辑弹出框
				$('tr button:nth-child(odd)').click(function(){
					edit(2)
					$('div').eq(1).css('display','block')
				})
				// 隐藏编辑弹窗
				$('div').eq(1).find('button').click(function(){
					$('div').eq(1).css('display','none')
				})
				// 确定保存更新的数据
				$('.editBtn').click(function(){
				   update(n)
				})
				// 删除功能模块
				$('.delBtn').click(function(){
					$('table tr').eq(n+1).remove()
				})
				// 显示删除弹出框
				$('tr button:nth-child(even)').click(function(){
					$('div').eq(2).css('display','block')
				})
				// 隐藏删除弹框
				$('div').eq(2).find('button').click(function(){
					$('div').eq(2).css('display','none')
				})
				
			})