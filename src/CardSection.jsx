export default function CardSection() {

        const arr_careers = [
        {
            id: 1,
            title: "Software Engineer",
            description: "Build and maintain software applications."
        },
        {
            id: 2,
            title: "Data Scientist",
            description: "Analyze and interpret complex data to help organizations make decisions."
        },
        {
            id: 3,
            title: "AI Engineer",
            description: "Design and deploy machine learning models and AI systems at scale."
        },
        {
            id: 4,
            title: "Cybersecurity Analyst",
            description: "Protect systems and networks by detecting, preventing, and responding to threats."
        },
        {
            id: 5,
            title: "DevOps Engineer",
            description: "Automate CI/CD pipelines and improve reliability of software delivery."
        },
        {
            id: 6,
            title: "Cloud Architect",
            description: "Design scalable, secure cloud infrastructures and migration strategies."
        },
        {
            id: 7,
            title: "UX/UI Designer",
            description: "Create intuitive interfaces and user experiences through research and design."
        },
        {
            id: 8,
            title: "Mobile App Developer",
            description: "Build native and cross‑platform apps for iOS and Android."
        },
        {
            id: 9,
            title: "Product Manager",
            description: "Define product vision, prioritize roadmaps, and coordinate cross‑functional teams."
        },
        {
            id: 10,
            title: "Blockchain Developer",
            description: "Build decentralized apps and smart contracts on blockchain platforms."
        }
        ];

    function DisplayCards(){
        const list=arr_careers.map((ele)=>{
                return(
            <ShowCards
                key={ele.id}
                title={ele.title}
                description={ele.description}
            />
        )})
        return(
                    <div className="card-container">{list}</div>
        )
    }

    function ShowCards(props){
        return(
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        )
    }
    return (
        <div className="card-section">
            <DisplayCards/>
            <p style={{textAlign:'center', opacity:.7, fontSize:12}}>← Scroll to see more careers →</p>
        </div>
    );


}