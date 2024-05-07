import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";


//loadable is like artifical delay on the website that we see usually
//same like suspense fallback and ErrorBoundary -> does the same

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      await new Promise(r => setTimeout(r, 5000));
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});