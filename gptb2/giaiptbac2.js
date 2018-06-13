var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
var c = parseInt(process.argv[4]);
delta = b * b - 4 * a * c;
if (a == 0 && b == 0 && c == 0){
		console.log('pt dung voi moi x thuoc r');
}else if (a == 0 && b == 0){
		console.log('pt vo nghiem');
}else if (a == 0){
		console.log('pt tro ve pt bac nhat');
		console.log('pt co nghiem x=', -b/c);
}else{
		if (delta < 0) {
				console.log('pt vo nghiem');
		}else if (delta > 0) {
				console.log('pt co 2 nghiem phan biet x1, x2 lan luot la:')
				console.log((-b-Math.sqrt(delta))/(2*a),(-b+Math.sqrt(delta))/(2*a));
		}else{
				console.log('pt co nghiem kep x1 = x2 = ',(-b)/(2*a));
		}
}
