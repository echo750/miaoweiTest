window.onload=function(){
			var oTable=document.getElementsByTagName("table")[0];
			var oBtnSelectAll=oTable.getElementsByTagName("input")[0];
			var aInputs=oTable.getElementsByTagName("input");
			var aRows=oTable.tBodies[0].rows;
			var oBtnPrice=oTable.tHead.getElementsByTagName("a")[0];
			var oBtnAddress=oTable.tHead.getElementsByTagName("a")[1];
			var oSpanTotalPrice=document.getElementById('price');
			var i=0;
			for(var i=0;i<aInputs.length;i++){
				if(aInputs[i].type=='button'&&aInputs[i].value=='删除'){
					aInputs[i].onclick=function(){
						this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
					};
				}
				if(aInputs[i].type=='checkbox'&&aInputs[i]!=oBtnSelectAll){
					aInputs[i].onclick=function(){
						// alert(oSpanTotalPrice.innerHTML);
						var fResult=0.0;
						var aRows=oTable.tBodies[0].rows;
						for(var i=0;i<aRows.length;i++){
							if(aRows[i].getElementsByTagName('input')[0].checked){
								fResult+=parseFloat(aRows[i].getElementsByTagName('span')[0].innerHTML.substring(1));
							}
						}
						oSpanTotalPrice.innerHTML='商品的总价是：'+fResult+'元';
					};
				}
			}
			oBtnSelectAll.onclick=function(){
				var fResult=0.0;
				for(i=0;i<aInputs.length;i++){
					if(aInputs[i].type=='checkbox'){
						aInputs[i].checked=oBtnSelectAll.checked;
					}
				}
				for(i=0;i<aRows.length;i++){
					if(aRows[i].getElementsByTagName('input')[0].checked){
						fResult+=parseFloat(aRows[i].getElementsByTagName('span')[0].innerHTML.substring(1));
					}
				}
				oSpanTotalPrice.innerHTML='商品的总价是：'+fResult+'元';
			}
		}