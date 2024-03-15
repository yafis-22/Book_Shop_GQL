<script>
   import { Router, Route } from "svelte-routing";
   import HomePage from "../views/homePage.svelte";
   import UserLogin from "../views/userLogin.svelte";
   import UserRegistrationForm from "../views/userRegistrationForm.svelte";
   import BookManagement from "../views/bookManagement.svelte";
   import BookDetails from "../views/bookDetails.svelte";
   import AdminDashboard from "../views/adminDashboard.svelte";
   import UserDashboard from "../views/userDashboard.svelte";
   import BookCategories from "../components/bookCategories.svelte";
   import Contact from "../views/contact.svelte";
   import SearchResults from "../components/searchResults.svelte";
</script>

<main>
   <Router>
      <Route path="/">
         <HomePage />
      </Route>
      <Route path="/login">
         <UserLogin />
      </Route>
      <Route path="/users">
         <UserRegistrationForm />
      </Route>
      <Route path="/books">
         <BookManagement />
      </Route>
      <Route path="/books/:id" let:params>
         <BookDetails bookId={params.id} />
      </Route>
      <Route path="/books/category/:category" let:params>
         <BookCategories category={params.category} />
      </Route>
      <Route path="/admins/me">
         <AdminDashboard />
      </Route>
      <Route path="/users/me">
         <UserDashboard />
      </Route>
      <Route path="/contact">
         <Contact />
      </Route>
      <Route path="/q">
         <SearchResults />
      </Route>
   </Router>
</main>

<style>
   main {
      background-color: #f5f5f5;
   }
</style>
