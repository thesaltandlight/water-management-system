const team =[
    {id: 1, name: 'Ama Boateng', title: 'Chief Executive Officer', image: '/assets/AmaBoateng.jpeg'},
    {id: 2, name: 'Daniel Thompson', title: 'Chief Operating Officer', image: '/assets/DanielThompson.jpg'},
    {id: 3, name: 'Emily Williams', title: 'Head Of Product Development', image: '/assets/EmilyWilliams.jpeg'},
    {id: 4, name: 'Kwame Asante', title: 'Head of Marketing', image: '/assets/KwameAsante.jpg'}
]
function MeetTheTeam(){
    return(
        <div className="text-center">
            <h2 className="text-6xl font-bold text-[#095EAE]">Meet The Team</h2>
            <p className="max-w-2xl mx-auto text-lg text-[#1E1E1E]">Our dedicated team of professionals is passionate about wellness and works hard to bring you the best hydration experience possible.</p>

            <div className="flex justify-center flex-wrap mt-8">
                {team.map((member) => (
                    <div key={member.id} className={`m-6 text-center ${member.id % 2 === 0 ? 'mt-52': ''}`}>
                        <img src={member.image} alt={member.name} className="rounded-full w-[300px] h-[300px] object-cover mx-auto mb-4"></img>
                        <div className="leading-tight">
                        <h2 className="text-[32px] font-bold text-[#095EAE]">{member.name.toUpperCase()}</h2>
                        <p className="text-[24px] font-light text-[#1E1E1E]">{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MeetTheTeam