type Question = {
    question: string;
    answer: string;
}

function Card(question: Question) {
    return(
        <div className="3 lg:mx-0 text-center content-center text-white ">
            <div className="uppercase text-3xl font-bold mx-4 py-5">
                {question.question}
            </div>

            <div className="uppercase font-light mx-2 lg:mx-12 py-5">
                {question.answer}
            </div>
        </div>
    )
}

export default Card;