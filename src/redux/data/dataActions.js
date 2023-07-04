// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let cost = await store
        .getState()
        .blockchain.smartContract.methods.cost()
        .call();
      //
      let firstPreSaleCost = await store
        .getState()
        .blockchain.smartContract.methods.firstPreSaleCost()
        .call();
      let firstPreSaleDate = await store
        .getState()
        .blockchain.smartContract.methods.firstPreSaleDate()
        .call();
      let firstPreSaleEndDate = await store
        .getState()
        .blockchain.smartContract.methods.firstPreSaleEndDate()
        .call();
      let firstMaxMintAmountPresale = await store
        .getState()
        .blockchain.smartContract.methods.firstMaxMintAmountPresale()
        .call();
      let firstNftPerAddressLimitPresale = await store
        .getState()
        .blockchain.smartContract.methods.firstNftPerAddressLimitPresale()
        .call();
      //
      let secondPreSaleEndDate = await store
        .getState()
        .blockchain.smartContract.methods.secondPreSaleEndDate()
        .call();
      let secondPreSaleDate = await store
        .getState()
        .blockchain.smartContract.methods.secondPreSaleDate()
        .call();
      let secondPreSaleCost = await store
        .getState()
        .blockchain.smartContract.methods.secondPreSaleCost()
        .call();
      let secondMaxMintAmountPresale = await store
        .getState()
        .blockchain.smartContract.methods.secondMaxMintAmountPresale()
        .call();
      let secondNftPerAddressLimitPresale = await store
        .getState()
        .blockchain.smartContract.methods.secondNftPerAddressLimitPresale()
        .call();
      //
      let maxSupply = await store
        .getState()
        .blockchain.smartContract.methods.maxSupply()
        .call();
      let maxMintAmount = await store
        .getState()
        .blockchain.smartContract.methods.maxMintAmount()
        .call();

      dispatch(
        fetchDataSuccess({
          cost,
          //
          firstPreSaleCost,
          firstPreSaleDate,
          firstPreSaleEndDate,
          firstMaxMintAmountPresale,
          firstNftPerAddressLimitPresale,
          //
          secondPreSaleCost,
          secondPreSaleDate,
          secondPreSaleEndDate,
          secondMaxMintAmountPresale,
          secondNftPerAddressLimitPresale,
          //
          maxSupply,
          maxMintAmount,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
