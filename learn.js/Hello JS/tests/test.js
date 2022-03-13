describe("pow", function(){

    it("отрицательный аргумент выдаст NaN", function(){
        assert.isNaN(pow(-2, 4));
    });

    it("2 в 3 степени будет 8", function(){
        assert.equal(pow(2, 3), 8);
    });

    it("2 в 4 степени будет 16", function(){
        assert.equal(pow(2, 4), 16);
    });


    function makeTest(x){
        let extanded = x * x * x;
        it(`${x} в степени 3 будет ${extanded}`, function() {
            assert.equal(pow(x, 3), extanded);
        });
    }

    for (let i = 1; i < 10; i++) {
        makeTest(i);
    }
});