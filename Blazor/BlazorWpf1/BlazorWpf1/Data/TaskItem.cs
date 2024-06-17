using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlazorWpf1.Data
{
    public class TaskItem : ReactiveUI.ReactiveObject
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
