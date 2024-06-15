import { Fragment, useCallback, useEffect, memo, useMemo } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { vars } from "../style/Vars";
import { DirectorySpan } from "./stylesDirectory";

export const Directory = memo( ({ list }) => {

    useEffect(()=>{
        console.log(`Directory render`);
        console.log(`${list}`);
    });

    useEffect(()=>{
        console.log('Directory did mount');
    }, []);

    const directories = list
    .map( (item, i) => {
        const slash = list[i + 1] ? <DirectorySpan key={i}>/</DirectorySpan> : null;
            return (
                <Fragment key={i + 0.5}>
                    <DirectorySpan>
                        <NavLink exact activeStyle={{color: vars.marvelRed}} to={item.directoryLink}> {item.directoryName}  </NavLink>
                    </DirectorySpan>
                    {slash}
                </Fragment>
            ) 
        });

    return ( <nav>{directories}</nav> );
});