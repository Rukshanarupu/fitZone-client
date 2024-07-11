type THeading={
    heading:string,
    paragraph?: string
}
const Heading = ({heading, paragraph}:THeading) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-2 lg:mt-3 lg:mb-4 font-semibold">{heading}</h1>
            <p>{paragraph}</p>
        </div>
        
    );
};

export default Heading;


