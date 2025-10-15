function HomeFunc() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8">
      {/* Main Welcome Section */}
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-3xl mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Welcome!</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          This is the <span className="font-semibold text-blue-600">Home Page</span> 
          of your React Router project. Below, you’ll find an explanation of all 
          major routing concepts — including prefix routes, nested routes, optional 
          segments, and more.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Theoretical Explanation Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          React Router Concepts Explained
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* 1. Prefix Route */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">1. Prefix Route</h3>
            <p>
              Prefix routes are used when you group related routes under a common path. 
              For example, routes like <code className="bg-gray-100 px-1 rounded">/admin/login</code> 
              and <code className="bg-gray-100 px-1 rounded">/admin/dashboard</code> 
              share the prefix <code className="bg-gray-100 px-1 rounded">/admin</code>.
            </p>
          </div>

          {/* 2. Nested Route */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">2. Nested Route</h3>
            <p>
              Nested routes allow you to render components within another route using 
              the <code className="bg-gray-100 px-1 rounded">Outlet</code> component. 
              It helps create layouts with sub-pages — for example, 
              <code className="bg-gray-100 px-1 rounded">/nested/nested2</code>.
            </p>
          </div>

          {/* 3. Optional Segment */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">3. Optional Segment</h3>
            <p>
              Optional segments make parts of a URL path optional. For example, 
              <code className="bg-gray-100 px-1 rounded">/dynamic/:id/:name?</code> 
              means <code>:name</code> is optional — the route will match both 
              <code className="bg-gray-100 px-1 rounded">/dynamic/1</code> and 
              <code className="bg-gray-100 px-1 rounded">/dynamic/1/Waleed</code>.
            </p>
          </div>

          {/* 4. Dynamic Route */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">4. Dynamic Route</h3>
            <p>
              Dynamic routes contain parameters that change based on user selection. 
              Example: <code className="bg-gray-100 px-1 rounded">/user/:id</code> — 
              here, <code>:id</code> can represent any user’s unique ID.
            </p>
          </div>

          {/* 5. Index Route */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">5. Index Route</h3>
            <p>
              An index route is the default child route that renders when no 
              sub-route is selected. It’s often used in nested routing structures 
              to show default content.
            </p>
          </div>

          {/* 6. Layout Route */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">6. Layout Route</h3>
            <p>
              Layout routes are parent routes that contain shared UI elements such 
              as headers, footers, or sidebars. Inside the layout, child routes render 
              using the <code className="bg-gray-100 px-1 rounded">Outlet</code> component.
            </p>
          </div>

          {/* 7. Link Component */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">7. Link</h3>
            <p>
              The <code className="bg-gray-100 px-1 rounded">Link</code> component 
              from React Router is used for **navigation without reloading the page**.  
              Example: <code className="bg-gray-100 px-1 rounded">&lt;Link to="/about"&gt;About&lt;/Link&gt;</code>.
            </p>
          </div>

          {/* 8. NavLink Component */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">8. NavLink</h3>
            <p>
              The <code className="bg-gray-100 px-1 rounded">NavLink</code> component 
              works like <code>Link</code> but adds an **active class** automatically 
              when the route matches the current URL — perfect for highlighting 
              active menu items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFunc;
