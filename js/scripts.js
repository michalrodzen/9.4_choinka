function drawTree(n) {
    for(i=0; i<n; i++) {
        for(j=0; j<=i; j++) {
             document.write('*');
        }
        document.write("<br />");
    }
}
drawTree(prompt('Podaj lczbę wierszy'));

function drawRealTree(n) {
	for(i=1;i<=n;i++) {
		for(j=n-1; j>=i; j--){  
            document.write('_');
        }
		for(j=1; j<=(2*i-1); j++){
            document.write('*');
        }
	    document.write("<br />")
	}
}

drawRealTree(prompt('Podaj lczbę wierszy'));
