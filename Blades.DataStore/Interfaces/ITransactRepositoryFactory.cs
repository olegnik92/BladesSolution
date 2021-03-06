﻿using Blades.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blades.DataStore.Interfaces
{
    public interface ITransactRepositoryFactory: IBladesService
    {
        TRepo GetRepository<TRepo>(Guid transactionId) where TRepo : ITransactRepository;
    }
}
