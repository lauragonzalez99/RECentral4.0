using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RECentral4._0.Models;
using RECentral4._0.Models.Database;

namespace RECentral4._0.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserFilesController : ControllerBase
    {


        /*private readonly Database _context;

        public CustomersController(Database context)
        {
            _context = context;
        }*/
        private Database _context = new Database();

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserFiles>>> GetUserFiles()
        {
            return await _context.UserFiles.ToListAsync();

        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserFiles>> GetUserFiles(int id)
        {
            var userFile = await _context.UserFiles.FindAsync(id);

            if (userFile == null)
            {
                return NotFound();
            }

            return userFile;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserFile(int id, UserFiles userFile)
        {
            if (id != userFile.Id)
            {
                return BadRequest();
            }

            _context.Entry(userFile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserFileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserFiles>> PostUserFile(UserFiles userFile)
        {
            _context.UserFiles.Add(userFile);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserFiles", new { id = userFile.Id }, userFile);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserFiles>> DeteleUserFiles(int id)
        {
            var userFile = await _context.UserFiles.FindAsync(id);
            if (userFile == null)
            {
                return NotFound();
            }

            _context.UserFiles.Remove(userFile);
            await _context.SaveChangesAsync();

            return userFile;
        }

        private bool UserFileExists(int id)
        {
            return _context.UserFiles.Any(e => e.Id == id);
        }
    }
}


