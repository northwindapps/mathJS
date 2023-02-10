window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is loaded');
    var real = [1,2,3];
    var imag = [1,2,3];
    var size = 3;
    let [r,i] = dft(real,imag,size);
    console.log(r);
    console.log(i);

    function dft(x_real,x_imag,dft_size) {
        var X_real = [];
        var X_imag = [];
        for (let index = 0; index < dft_size; index++) {
            X_real.push(0);
            X_imag.push(0);
        }
        for (let k = 0; k < dft_size; k++) {
            for (let n = 0; n < dft_size; n++) {
                if (n==0 || k == 0) {
                    var w_real=Math.cos(0);
                    var w_imag=-Math.sin(0);
                    
                }else{
                    var w_real=Math.cos(2*Math.PI*(k-1)*(n-1)/dft_size);
                    var w_imag=-Math.sin(2*Math.PI*(k-1)*(n-1)/dft_size);
                }
                X_real[k]=X_real[k]+w_real*x_real[n]-w_imag*x_imag[n];
                X_imag[k]=X_imag[k]+w_real*x_imag[n]+w_imag*x_real[n];
            }
        }
        return [X_real,X_imag];
    }



});