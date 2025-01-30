import { Items } from "./Item.js";
import * as Form from "./Form.js";
import { travelList } from "../db.js";
export function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {travelList.map((items) => (
            <Items items={items} key={items.id} />
          ))}
        </ul>
        <Form.ActionForm />
      </div>
    </>
  );
}
