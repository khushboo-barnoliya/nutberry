export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({auth, request}){
      const isLoggedIn = auth?.user
      const isOnDashboard = request.nextUrl.pathname.starsWith("/admin")
      if(isOnDashboard){
        if(isLoggedIn) return true
        return false
      }
      else if(isLoggedIn){
        return Response.redirect(new URL("/admin", request.nextUrl));
      } 
      return true;
    }
  }
}