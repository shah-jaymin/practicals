find $1 | awk -F'/' '{ 
	depth=3;
	offset=2;
	str="|  ";
	path="";
	if(NF >= 2 && NF < depth + offset) {
		while(offset < NF) {
			path = path "|  ";
			offset ++;
		}
		print path "|-- "$NF;
	}
}'