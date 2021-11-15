function calculateFanFightWallet(discountPercentage) {
  const initialEntryFee = 400; //Rs
  var fanFightWallet = {
    bonusBucket: 60,
    depositBucket: 100,
    winningsBucket: 340,
    get total() {
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
