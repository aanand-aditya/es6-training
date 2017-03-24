function defParam(x, y = 7, z = 42) {
    return("sent parameter="+x+" default parameter="+y+","+z);
}
exports.defParam = defParam;