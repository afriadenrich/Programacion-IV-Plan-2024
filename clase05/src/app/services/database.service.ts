import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel, SupabaseClient } from '@supabase/supabase-js';
import { Auto } from '../classes/auto';
import { PostgrestQueryBuilder } from "@supabase/postgrest-js";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  supabase: SupabaseClient<any, "public", any>;
  tablaAutos: PostgrestQueryBuilder<any, any, "autos", unknown>;
  canal: RealtimeChannel;

  constructor() { 
    this.supabase = createClient("https://ifbdcuispaelyipwwpij.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYmRjdWlzcGFlbHlpcHd3cGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjYzMzgsImV4cCI6MjA1OTkwMjMzOH0.ddFnhC_Y1cxt_lHKye0lbDAaOpa4eG9kKc3r7FYwD-I");
    this.tablaAutos = this.supabase.from("autos");

    this.canal = this.supabase.channel("schema-db-changes");
    // canal.on('postgres_changes', {
    //   event: '*',
    //   schema: 'public'
    // }, (payload) => {
    //   // Esto sólo se ejecuta cuando haya algún cambio
    //   console.log(payload);
    // });

  }



//crear(auto, auto1, auto2, auto3)
// crear([auto, auto1, auto2, auto3]);
  async crear(...autos: Auto[]){
    const { data, error } = await this.tablaAutos.insert(autos); // [{auto: {marca, modelo, precio}}] [{marca, modelo, precio}]
   // const { data, error } = await this.tablaAutos.insert([{marca: auto.marca, modelo: auto.modelo, precio: auto.precio}]);    
   //  const { data, error } = await this.tablaAutos.insert([{...auto}]); // [{marca, modelo, precio}]  

  // const marca = auto.marca;
  // const {marca} = auto;

  console.log(data);
  console.log(error);
  }

  async listar(): Promise<Auto[] | []> {
                                  // SELECT marca, modelo, precio FROM autos
    const {data, error} = await this.tablaAutos.select("id, marca, modelo, precio");

    console.log(data);
    if(error){
      return [];
    }
    return data as Auto[]; 
  }

  eliminar(){
    
  }
}


/*
supabase.from("autos").insert([{
      marca: "Citroen", modelo: "C3", precio: 157000
    }]).then(({data, error}) => {
      console.log(data);
      console.log(error);
      });
      
     // SELECT * FROM autos
     
     supabase.from("autos").select("*").then(({data, error}) => {
       console.log(data);
       console.log(error);  
    })

    //   DELETE FROM autos WHERE id = 3
    //                      eq('id', 3)
    supabase.from("autos").delete().eq('id', 3).then(({data, error}) => {
      if(error){
        console.error(error)
      } else {
        console.log("Data: ", data)
      }
    });


    supabase.from("autos").update({
      marca: "Mclaren",
      precio: 9,
      modelo: "Piastri"
    }).eq("id", 4).then(({data, error}) => {
      if(error){
        console.error(error)
      } else {
        console.log("Data: ", data)
      }
    });
  }

*/

/*
Para la próxima

const channel = supabase
  .channel('autos') 
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'usuarios' },
    (payload) => {
      console.log(payload)
    }
  )
  .subscribe()
*/