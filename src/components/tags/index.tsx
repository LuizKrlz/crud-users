import React, { FC, useState, useEffect, ReactNode } from "react";
import { Chip, IconButton, TextField } from "@material-ui/core";

import useStyles from "./styles";
import { Add } from "@material-ui/icons";
import { RemoveParam } from "../../shared/types";

type TagsProps = {
    tags: [string];
    handleChange: Function;
    children?: ReactNode;
};

type HandleRemoveParam = {
    itemIndice: number;
};

const Tags: FC = ({ tags, handleChange }: TagsProps) => {
    const classes = useStyles();
    const [items, setItems] = useState<[string?]>(tags ? tags : []);
    const [newItem, setNewItem] = useState("");

    const handleDelete = ({ itemIndice }: HandleRemoveParam) => {
        const olditems = [...items];
        const newitems = olditems.filter((item, index) => index != itemIndice);
        setItems(newitems);
    };

    const handleAdd = () => {
        setItems([...items, newItem]);
        setNewItem("");
    };

    useEffect(() => {
        handleChange(items);
    }, [items]);

    return (
        <div className={classes.root}>
            <div className={classes.containerForm}>
                <TextField
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    label="Add new tag"
                />

                <IconButton onClick={handleAdd}>
                    <Add />
                </IconButton>
            </div>
            {items.length > 0 && (
                <div className={classes.containerChips}>
                    {items.map((value, index) => (
                        <Chip
                            key={index}
                            label={value}
                            onDelete={() => handleDelete({ itemIndice: index })}
                            variant="outlined"
                            size="small"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tags;
