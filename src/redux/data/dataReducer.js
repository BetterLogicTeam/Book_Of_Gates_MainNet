const initialState = {
  loading: false,
  maxSupply: 0,
  cost: "",
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        cost: action.payload.cost,
        //
        firstPreSaleCost: action.payload.firstPreSaleCost,
        firstPreSaleDate: action.payload.firstPreSaleDate,
        firstPreSaleEndDate: action.payload.firstPreSaleEndDate,
        firstMaxMintAmountPresale: action.payload.firstMaxMintAmountPresale,
        firstNftPerAddressLimitPresale:
          action.payload.firstNftPerAddressLimitPresale,
        //
        secondPreSaleCost: action.payload.secondPreSaleCost,
        secondPreSaleDate: action.payload.secondPreSaleDate,
        secondPreSaleEndDate: action.payload.secondPreSaleEndDate,
        secondMaxMintAmountPresale: action.payload.secondMaxMintAmountPresale,
        secondNftPerAddressLimitPresale:
          action.payload.secondNftPerAddressLimitPresale,
        //
        maxSupply: action.payload.maxSupply,
        maxMintAmount: action.payload.maxMintAmount,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
