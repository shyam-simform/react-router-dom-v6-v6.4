# react-router-dom-v6
React Router DOM v6 is a declarative routing library for React web applications, with improved type checking and simplified API. The library is available on GitHub as an open-source project.


- React does not have built in routing solutions that’s way we need to reach extra library. And most popular option out there is react-router. And v6 is just the latest and greatest option with bunch of  cool new features and custom hooks.

**Installation**: 

```
npm install react-router-dom@6
```



1. **Routes is replaced with Switch:** 

- In react router dom v6 switch is no longer available switch is replaced with the Routes in react router dom v6.

```
// old - v5
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

// new - v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
```

2.**Route component is replaced with Route element**

- If you notice in the above example, in the new version we are passing a react element instead of a component. This is so much better, now we can pass props directly to the element.

```
// old - v5
<Route path="/">
  <HomePage/>
</Route>
-----------or------------
<Route path="/" component={HomePage} />
 
// new - v6
<Route path=”/” element={<HomePage/>}/>
```

3.**Exact is no longer available:**

- React router v6 doesn't support exact anymore. As stated in their documentation: You don't need to use an exact prop on <Route path="/"> anymore. This is because all paths match exactly by default.

```
// old - v5
<Route path="/" exact>
  <HomePage/>
</Route>

// new - v6
<Route path=”/” element={<HomePage/>}/>
```

4.**Redirect is replaced with Navigate:**

- Redirect is no longer available in React Router Dom v6. Instead, the library offers a new component called Navigate that serves a similar purpose.

```
// old - v5
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact>
            <Redirect to="/welcome">
        </Route>
        <Route path="/welcome" component={Welcome} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

// new - v6
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to= "/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
```

5.**NavLink:**

- NavLink component is a useful tool for creating navigation links that indicate which page the user is currently on, and it provides several props that can be used to customize the behavior and styling of the link.


- exact prop: In version 5, you can use the exact prop to ensure that the link is only active when the current URL matches exactly. In version 6, this functionality is achieved using the end prop.

- In the previous version we could set a seperate class or a style object for the time when the <NavLink/> would be active. In V6, these two props are removed, instead in case of Nav Links className and style props, work a bit differently. They take a function which in turn gives up some information about the link, for us to better control the styles.

```
// old - v5
<NavLink
  to="/news"
  style={{ color: 'black' }}
  activeStyle={{ color: 'blue' }}>
</NavLink>

<NavLink
  to="/news"
  className="nav-link"
  activeClassName="active">
</NavLink>

// new - v6
<NavLink
  to="/news"
  style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>
</NavLink>

<NavLink
  to="/news"
 className={({ isActive }) => (isActive ? "link active" : "link")}
</NavLink>
```

6.**Outlet:**

-  The Outlet component is used to render the child components of a route. 

- An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}


function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
```

- The summary of the outlet is simple placeholder which simply telling react route that where nested content, nested route content should be inserted. So this the alternative to defining nested routes inside of other component


