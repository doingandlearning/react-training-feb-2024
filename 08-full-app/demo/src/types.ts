// {
// 	"userId": 1,
// 	"id": 3,
// 	"title": "fugiat veniam minus",
// 	"completed": false
// 	}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  userObj: {
    name: string;
    address: string;
  };
}

// Dictionary type / Index
interface Currency {
  [country: string]: {
    symbol: string;
    name: string;
  };
}

const currency: Currency = {
  gbp: {
    symbol: "£",
    name: "Pound Sterling",
  },
};
