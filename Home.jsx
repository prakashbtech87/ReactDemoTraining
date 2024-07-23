function Home(){
let name="Prakash";
let favItems=["apple","banana","carrot"];
let married=false;

    return(
        <div>
<h1> My Home</h1>
<p> Welcome to my home {name}</p>

<ul>
    {
        favItems.map(
            (itsem,inddex)=>{
                return <li key={inddex}>{itsem}</li>
            }
        )
    }
</ul>

{/*married && <p> He is marriged  </p>*/}
{married ? <p> he is married </p>:<p>he is single</p>}




</div>
    )
}

export default Home;