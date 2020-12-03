address = '1.1.1.1';
defangAdd = '';

// Loop through the address, if a '.' is found, replace it with the desired '[.]'
// otherwise just add the number

for (i = 0; i < address.length; i++) {
	console.log(address[i]);
	if (address[i] == '.') {
		defangAdd += '[.]';
	} else {
		defangAdd += address[i];
	}
}

console.log(defangAdd);
