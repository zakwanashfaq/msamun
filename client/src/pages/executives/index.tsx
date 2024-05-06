import PageTemplate from "@/components/pageTemplate";
import { TExecutive, executives } from "@/db/executives";
import { useState, useEffect } from "react";

export function ExecutiveItem(props: { item: TExecutive }) {
  return (
    <div className="d-flex flex-column pb-5" id={props.item.id}>
      <div className="row">
        <div className="col-md-6">
          <div className="pb-1 text-dark fs-5 fw-bold">{props.item.name}</div>
          <div className="pb-2 text-dark">{props.item.position}</div>
          <div className="pb-2 text-dark">{props.item.contact}</div>
          <div className="pb-2 text-dark">
            Start Date: {props.item.startDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExecutivesPage() {
  const [executiveItems, setExecutiveItems] = useState<TExecutive[] | null>(
    null
  );

  useEffect(() => {
    setExecutiveItems(Object.values(executives));
  }, []);

  return (
    <PageTemplate>
      <div className="col-12 ">
        <div className="col-12 col-md-8 mt-5 px-4 px-md-5 pb-5 mt-md-3 d-flex flex-column">
          {executiveItems?.map((execItem) => (
            <ExecutiveItem key={execItem.id} item={execItem} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
