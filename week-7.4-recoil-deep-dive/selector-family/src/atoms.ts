import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

//when every member of atom family needs to be fetched from the backend server
//then we need to use selector in the default -> and it should be synchonous call only
//but we can have a function inside that can be a async await combo

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});