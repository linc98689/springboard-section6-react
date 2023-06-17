const Tweet = (props)=>(
    <div class="tweet">
        <p><b>{props.name}</b> @{props.username} - <span class="date">{props.date}</span> </p>
        <p>{props.message}</p>
    </div>
);
const App = ()=> (<div>
<Tweet name="Tom Angell" username="tomangell" date="June 15" message="The House of Representatives unanimously passed a resolution expressing 'continued support' for U.S. citizen Marc Fogel, who is being detained in Russia under a 'politicized, excessive sentence for his alleged offense' of possessing medical cannabis."/>

<Tweet name="greg" username="greg16676935420" date="June 3" message="Whatever you say Greg 😂"/>

<Tweet name="fity.eth" username="Fityeth" date="June 16" message="When I'm not diving into the NFT world, I'm all about making a difference. Just saved a precious baby "/>

</div>);

ReactDOM.render(<App/>, document.getElementById("root"));