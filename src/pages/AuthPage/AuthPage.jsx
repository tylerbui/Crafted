import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function AuthPage({setUser}) {
  return (
    <main>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
      
    </main>
  );
}