function iframeclick() {
			document.getElementById("theiframe").contentWindow.document.body.onclick = function() {
			document.getElementById("theiframe").contentWindow.location.reload();
				}
			}