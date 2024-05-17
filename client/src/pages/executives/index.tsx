import PageTemplate from "@/components/pageTemplate";
import Database from "@/db/db";
import { TExecutive } from "@/db/Executives";
import { useState, useEffect } from 'react';

function ExecutiveProfile(props: { executive: TExecutive }) {
  return (
    <div className="executive-profile">
      <span>Name: {props.executive.name}</span>
      <span>Title: {props.executive.title}</span>
      <span>Department: {props.executive.department}</span>
      <span>Start Date: {new Date(props.executive.startDate).toLocaleDateString()}</span>
      <span>Biography: {props.executive.biography}</span>
    </div>
  );
}

export default function ExecutivesPage() {
  const [executives, setExecutives] = useState<TExecutive[] | null>(null);

  useEffect(() => {
    const fetchedExecutives = Database.getExecutives();
    setExecutives(fetchedExecutives);
  }, []);

  return (
    <PageTemplate>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <span className="text-dark fs-5">Executives</span>
          {executives?.map(executive => (
            <ExecutiveProfile key={executive.id} executive={executive} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
