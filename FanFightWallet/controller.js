function calculateFanFightWallet(discountPercentage, entryFee, bonus, deposit, winnings) {

  // I am assuming the values the given in the task PDF as default values.

  const initialEntryFee = entryFee || 400; //Rs
  var fanFightWallet = {
    bonusBucket: bonus || 60,
    depositBucket: deposit || 100,
    winningsBucket: winnings || 340,
    get total() {
      // Getter to calculate the sum;
      return this.bonusBucket + this.depositBucket + this.winningsBucket;
    },
  };

  let afterDiscount =
    initialEntryFee - (initialEntryFee * discountPercentage) / 100;
  if (fanFightWallet.bonusBucket > (afterDiscount * 10) / 100) {
    fanFightWallet.bonusBucket =
      fanFightWallet.bonusBucket - (afterDiscount * 10) / 100;
    afterDiscount = afterDiscount - (afterDiscount * 10) / 100;
  } else {
    afterDiscount = afterDiscount - fanFightWallet.bonusBucket;
    fanFightWallet.bonusBucket = 0;
  }

  if (fanFightWallet.depositBucket > afterDiscount) {
    fanFightWallet.depositBucket = fanFightWallet.depositBucket - afterDiscount;
    afterDiscount = 0;
  } else {
    afterDiscount = afterDiscount - fanFightWallet.depositBucket;
    fanFightWallet.depositBucket = 0;
  }

  fanFightWallet.winningsBucket = fanFightWallet.winningsBucket - afterDiscount;

  // console.log(fanFightWallet);
  // console.log(fanFightWallet.getTotal);
  return fanFightWallet;
}

//   main(20);

module.exports = {
  calculateFanFightWallet,
};
