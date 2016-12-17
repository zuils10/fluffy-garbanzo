function generateSaveGame() {
    var result=rawData;
    for (var k in ancient)
        if (ancient[k].Level.equals(0)==false) {
            result.ancients.ancients[k].level=ancient[k].Level.toExponential();
            result.ancients.ancients[k].spentHeroSouls=Decimal(result.ancients.ancients[k].spentHeroSouls).plus(ancient[k].CostToOptimal).toExponential();
            result.heroSouls=Decimal(result.heroSouls).minus(ancient[k].CostToOptimal).toExponential();
        }
	return JSON.stringify(result);
}
