const fs = require('fs');
function frequent_pairs(data_file_name , stopword_file_name ,k)
{
    const Data_File_Descriptor = fs.readFileSync(data_file_name , 'utf-8');
    const Stop_File_Descriptor = fs.readFileSync(stopword_file_name,'utf-8');

    const lines = Data_File_Descriptor.split(/[?.!]/);

    const Word_Couples = [];

    for(let line of lines)
    {
        let tmp = line.trim().toLowerCase().split(/\s+/)
        for(let i = 0 ;i<tmp.length-1;i++)
        {
            let w1 = tmp[i];
            let w2 = tmp[i+1];
            if(w1.length>=5 && w2.length>=5) Word_Couples.push([w1,w2]);
        }
    }

    const Word_Count = {};

    for(let [w1 , w2] of Word_Couples)
    {
        if(!Stop_File_Descriptor.includes(w1) && !Stop_File_Descriptor.includes(w2))
        {
            if(isNaN(Word_Count[`${w1} ${w2}`])) Word_Count[`${w1} ${w2}`] = 0;
            Word_Count[`${w1} ${w2}`] = Word_Count[`${w1} ${w2}`] + 1;
        }
    }

    const Sort_Word = Object.keys(Word_Count).sort((x,y) => Word_Count[y] - Word_Count[x]);

    for(let i =0 ; i<k ;i++)
    {
        console.log(`${Sort_Word[i]} : ${Word_Count[Sort_Word[i]]}회`);
    }


}

frequent_pairs('novel.txt' , 'stop.txt',5)


