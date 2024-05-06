import PageTemplate from "@/components/pageTemplate";

export default function ExecutivesPage() {
  return (
    <PageTemplate>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mb-5">Login</h2>
        <div className="col-12 col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="username"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
              id="password"
            />
          </div>

          <div className="d-grid gap-2 pb-4">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <div className="d-grid gap-2 pb-2">
            <button className="btn btn-secondary">Sign Up</button>
          </div>
          <div className="d-grid gap-2 pb-2">
            <button className="btn btn-danger">Sign In with Google</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
