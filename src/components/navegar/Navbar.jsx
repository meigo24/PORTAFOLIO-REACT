import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function navbar() {
    return (
        
        <Navbar>
            <Link href="https://github.com/meigo24">
            <img src = "https://th.bing.com/th/id/R.a234a9b60fb0267f858cda8f63afcd3c?rik=FshrapI7xwJGaw&pid=ImgRaw&r=0" width={65}/>
                </Link>
            
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">REACT</p>
            </NavbarBrand>
        
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="#" href="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/src/" color="#page">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Info
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center">

            </NavbarContent>
        </Navbar>
    );
}
