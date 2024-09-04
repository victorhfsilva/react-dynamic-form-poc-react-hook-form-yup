import './styles.css'

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <>
            <div className='header'>
                <h1 className='header-title'>
                    Dynamic Form
                </h1>
            </div>
            <main>
                {children}
            </main>
        </>
    )
}