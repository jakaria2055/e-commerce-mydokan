import axios, { Axios } from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const WishStore = create((set) => ({
  isWishSubmit: false,
  WishSaveRequest: async (productID) => {
    try {
      set({ isWishSubmit: null });
      let res = await axios.post(`/api/v1/SaveWishList`, {
        productID: productID,
      });
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isWishSubmit: false });
    }
  },

  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/WishList`);
      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  RemoveWishListRequest: async (productID) => {
    try {
      set((state) => ({
        WishList: state.WishList?.filter(
          (item) => item.productID !== productID
        ),
        WishCount: state.WishCount - 1,
      }));
      await axios.delete(`/api/v1/RemoveWishList`, {
        data: { productID: productID },
      });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default WishStore;
