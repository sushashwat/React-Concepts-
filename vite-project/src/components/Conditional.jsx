// Conditional Rendering means showing different UI based on a condition.

const isLoggedIn = true;

function Conditional (){
    return(
        <div>
            {isLoggedIn ? (
                <h1>welcome</h1>
            ): (
                <button>Login</button>
            )
        }
        </div>
    );
}

// const isAdmin = true;

// function App() {
//   return (
//     <div>
//       {isAdmin && <button>Delete User</button>}
//     </div>
//   );
// }
export default Conditional;
