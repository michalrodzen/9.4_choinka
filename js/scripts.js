function drawTree(n) {
    for(i=0; i<n; i++) {
        var star = '';
        for(j=0; j<=i; j++) {
             star += '*';
        }
        console.log(star);
    }
}
drawTree(prompt('Podaj lczbę wierszy'));

function drawRealTree(n) {
	for(i=1;i<=n;i++) {
        var star = '';
		for(j=n-1; j>=i; j--){  
            star += ' ';
        }
		for(j=1; j<=(2*i-1); j++){
            star += '*';
        }
	    console.log(star);
	}
}

drawRealTree(prompt('Podaj lczbę wierszy'));
