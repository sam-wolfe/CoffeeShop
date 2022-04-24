
const Page = ({ID, pageID, children}) => {
    return pageID === ID && <div>{children}</div>;

}

export default Page;